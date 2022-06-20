import { gql, useQuery } from "@apollo/client";
import "./styles/global.css";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <div>
      <ul>
        {data?.lessons.map((lesson) => {
          return <li>{lesson.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
