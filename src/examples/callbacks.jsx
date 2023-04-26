export const Card = ({ id, onSelect }) => (
  <div>
    <button onClick={() => onSelect(id)} />
  </div>
);

export const Container = () => {
  return (
    <div>
      <Card
        id="123"
        onSelect={(id) => {
          console.log(`Selected User ID: ${id}`);
        }}
      />
    </div>
  );
};
