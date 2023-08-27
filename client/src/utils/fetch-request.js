// utility function to make fetch request
// purpose: avoid entering the try-catch block everytime

const fetchRequest = async(api) => {
  try {
    const data = await api();
    if (data.error) throw new Error(data.error);
    return data;

  } catch (error) {
    console.log(error);
  }
};

export default fetchRequest;