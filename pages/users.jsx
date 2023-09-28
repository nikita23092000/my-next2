import Users from '../components/jshp/Users';

export default function AboutPage({propsUsers}) {
  return <Users propsUsers={propsUsers}/>;
}

export async function getStaticProps() {
  const propsUsers = [
    await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
    await (await fetch('https://jsonplaceholder.typicode.com/users/2')).json(),
  ];
  return { props: { propsUsers } }
}