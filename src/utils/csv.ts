interface UserAnswer {
  order: number;
  title: string;
  type: string;
  answer: string;
}

const convertToCSV = (data: UserAnswer[]) => {
  const headers = 'order,title,type,answer\n';
  const rows = data
    .map((item) => `${item.order},${item.title},${item.type},${item.answer}`)
    .join('\n');
  return headers + rows;
};

export const downloadCSV = (data: UserAnswer[]) => {
  const csvContent = convertToCSV(data);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'user_answers.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
