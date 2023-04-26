export const Card = ({ title }) => (
  <div>
    <p>{title}</p>
  </div>
);

export const Container = () => (
  <div>
    <Card title={"Title"} />
    <Card />
  </div>
);
