import ClientSideComponent from './ClientSideComponent';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Page = async () => {
  const a = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json as IPost[];
    });

  return (
    <div>
      바디 from test
      <ClientSideComponent />
    </div>
  );
};

export default Page;
