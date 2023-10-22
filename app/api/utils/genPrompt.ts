interface PromptOptions {
  name?: string;
  address?: string;
  mpName?: string;
  additionalInfo?: string;
}

const genPromt = (options?: PromptOptions): string => {
  let promptString: string = `Generate an email template for a UK MP that fits all the criteria required as per the U.K. Gov to tell them that you disagree with their stance on the Israel - Palestine conflict, and that they should be against the Israeli occupation including reference to international charity claims from Amnesty and Human Rights Watch and they should be against the occupation and supporting the human rights of the Palestinian people.

Please make sure the language is:
  - easy to read, and won’t take more than 3-6 minutes to read. Less than 3-4 paragraphs, no more than 5 sentences per paragraph. The shorter the better.
  - use direct, clear language
  - uses {{ }} to indicate variables. For example, a variable named “name” will be shown as “{{name}}”, link this statement, “Hi, my name is {{name}}”.
  `;

  if (options?.name || options?.address || options?.mpName) {
    const additionalPersonalInfo = [
      options?.name && `- Name: ${options.name}`,
      options?.address && `- Address: ${options.address}`,
      options?.mpName && `- MP Name: ${options.mpName}`,
    ];
    promptString += `
Here is some additional personal info: 
${additionalPersonalInfo.join("\n")}
    `;
  }

  if (options?.additionalInfo) {
    promptString += `
The following is additional info about themselves from the user, use this information if possible in the context of the letter. For example, if the user tells you that they are a doctor, generating a part in the letter that read as the following: “As a doctor, I am horrified by the actions of Israel against hospitals.” would be an appropriate use of their background:

${options.additionalInfo}
    `;
  }

  return promptString;
};

export default genPromt;

export { type PromptOptions };
