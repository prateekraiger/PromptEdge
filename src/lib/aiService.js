const API_KEY = import.meta.env.VITE_AI_API_KEY;
const API_URL = "https://api.chatanywhere.tech/v1/chat/completions";

if (!API_KEY || !API_URL) {
  console.error("Missing required environment variables: VITE_AI_API_KEY");
}

// Add some variety to the prompts
const getRandomPrompt = (skillLevel, techStack, domain) => {
  const prompts = [
    `Generate a unique ${skillLevel} level project idea using ${techStack} for ${domain}. Make it practical and achievable.`,
    `Create an innovative ${skillLevel} project using ${techStack} in the ${domain} field. Focus on real-world applications.`,
    `Design a creative ${skillLevel} level application with ${techStack} for ${domain}. Make it stand out from common projects.`,
    `Develop a novel ${skillLevel} project concept using ${techStack} in ${domain}. Include unique features and modern approaches.`,
    `Craft an original ${skillLevel} level idea using ${techStack} for ${domain}. Make it both educational and practical.`,
    `Imagine a groundbreaking ${skillLevel} project with ${techStack} in ${domain}. Focus on solving real problems.`,
    `Propose a cutting-edge ${skillLevel} application using ${techStack} for ${domain}. Emphasize innovation and user experience.`,
    `Conceive a distinctive ${skillLevel} level project with ${techStack} in ${domain}. Make it memorable and impactful.`,
    `Formulate a unique ${skillLevel} project idea using ${techStack} for ${domain}. Focus on scalability and maintainability.`,
    `Devise an exceptional ${skillLevel} level application with ${techStack} in ${domain}. Make it both challenging and rewarding.`,
  ];
  return prompts[Math.floor(Math.random() * prompts.length)];
};

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
              "You are a creative project idea generator. Your task is to generate unique and innovative project ideas that are different from common or repetitive ideas. Each idea should be distinct and creative. Avoid generating similar ideas across multiple requests. Format your response with these exact sections:\nTitle: [Project Title]\nDescription: [Project Description]\nKey Features:\n- [Feature 1]\n- [Feature 2]\n- [Feature 3]\n- [Feature 4]\nTech Stack: [tech1, tech2, tech3]",
          },
          {
            role: "user",
            content: getRandomPrompt(skillLevel, techStack, domain),
          },
        ],
        temperature: 1.0, // Maximum temperature for maximum creativity
        n: 1,
        presence_penalty: 1.0, // Maximum presence penalty to avoid repetition
        frequency_penalty: 1.0, // Maximum frequency penalty to avoid repetition
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
