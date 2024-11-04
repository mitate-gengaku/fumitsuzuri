import matter from "gray-matter";

export interface IYamlData {
  id: string;
  title: string;
  author: string;
  summary: string;
  price: string;
  edition: string;
}

export interface IYamlReturnValue extends IYamlData {
  content: string;
}

export const getYamlHeader = async (file: File): Promise<IYamlReturnValue> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target?.result as string;
      const { data, content } = matter(fileContent);
      const result = {
        ...(data as IYamlData),
        content,
      };

      resolve(result);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
};
