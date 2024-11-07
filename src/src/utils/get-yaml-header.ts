import matter from "gray-matter";

export interface IYamlData {
  id: string;
  title: string;
  author: string;
  summary: string;
  price: number;
  edition: number;
}

export interface IYamlReturnValue extends IYamlData {
  content: string;
}

export const getYamlHeader = async (file: File): Promise<IYamlReturnValue> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const fileContent = event.target?.result as string;
        const { data, content } = matter(fileContent);
        const result = {
          ...(data as IYamlData),
          content,
        };

        resolve(result);
      } catch (e) {
        if (e instanceof Error) {
          reject(e);
        }
        const error = new Error(String(e));
        reject(error);
      }
    };
    reader.onerror = (e) => {
      if (e instanceof Error) {
        reject(e);
      }
      const error = new Error(String(e));
      reject(error);
    };
    reader.readAsText(file);
  });
};
