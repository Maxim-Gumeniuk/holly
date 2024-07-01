interface UserAnswer {
  order: number;
  title: string;
  type: string;
  answer: string;
}

const userAnswers = (answers:  {
  language: string;
  gender: string;
  age: string;
  hateInBooks: Array<string>;
  favoriteTopics: Array<string>;
  email: string;
}
) => {
    return [
  { order: 1, title: "What is prefferred language?", type: "single-select", answer: `${answers.language}` },
  { order: 2, title: "Waht gender do you identify with?", type: "single-select-imagw", answer: `${answers.gender}` },
  { order: 3, title: "What is your age?", type: "single-select", answer:  `${answers.age}` },
  { order: 4, title: "What do you hate the most in a book", type: "multiple-select", answer:  `${answers.hateInBooks.join(',')}` },
  { order: 5, title: "What are you favorite topics", type: "bubble", answer:  `${answers.favoriteTopics.join(',')}`},
  { order: 6, title: "email", type: "email", answer:  `${answers.email}` }
    ]
}

const convertToCSV = (data: UserAnswer[]) => {
  const headers = "order,title,type,answer\n";
  const rows = data.map(item => `${item.order},${item.title},${item.type},${item.answer}`).join("\n");
  return headers + rows;
};

export const downloadCSV = (data: UserAnswer[]) => {
  const csvContent = convertToCSV(data);
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "user_answers.csv");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};