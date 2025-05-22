const API_KEY = import.meta.env.VITE_AI_API_KEY;
const API_URL = "https://api.chatanywhere.tech/v1/chat/completions";

if (!API_KEY || !API_URL) {
  console.error("Missing required environment variables: VITE_AI_API_KEY");
}

export const generateProjectIdea = async (skillLevel, techStack, domain) => {
  if (!API_KEY) {
    throw new Error(
      "API configuration is missing. Please check your environment variables."
    );
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a creative project idea generator. Format your response with these exact sections:\nTitle: [Project Title]\nDescription: [Project Description]\nKey Features:\n- [Feature 1]\n- [Feature 2]\n- [Feature 3]\nTech Stack: [tech1, tech2, tech3]",
          },
          {
            role: "user",
            content: `Generate a ${skillLevel} level project idea using ${techStack} for ${domain}. Make it practical and achievable.`,
          },
        ],
        temperature: 0.7,
        n: 1,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error?.message ||
          `API request failed with status ${response.status}`
      );
    }

    const data = await response.json();

    if (!data.choices?.[0]?.message?.content) {
      throw new Error("Invalid response format from API");
    }

    const content = data.choices[0].message.content;
    const lines = content.split("\n").filter((line) => line.trim());

    // Parse the response with exact section matching
    const idea = {
      title:
        lines
          .find((line) => line.startsWith("Title:"))
          ?.replace("Title:", "")
          .trim() || "Untitled Project",
      description:
        lines
          .find((line) => line.startsWith("Description:"))
          ?.replace("Description:", "")
          .trim() || "No description provided",
      keyFeatures: lines
        .filter((line) => line.trim().startsWith("-"))
        .map((line) => line.replace("-", "").trim())
        .filter(Boolean),
      suggestedTechStack: lines
        .find((line) => line.startsWith("Tech Stack:"))
        ?.replace("Tech Stack:", "")
        ?.split(",")
        .map((tech) => tech.trim())
        .filter(Boolean) || [techStack],
      estimatedDifficulty: skillLevel,
    };

    // Validate the parsed idea
    if (!idea.keyFeatures.length) {
      idea.keyFeatures = [
        "Core functionality implementation",
        "User interface development",
        "Data management and storage",
        "Testing and deployment",
      ];
    }

    return idea;
  } catch (error) {
    console.error("Error generating project idea:", error);
    throw new Error(
      error.message || "Failed to generate project idea. Please try again."
    );
  }
};
