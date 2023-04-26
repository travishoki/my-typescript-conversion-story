type CardProps = {
  id: string;
  onSelect: (id: string) => void;
};

export const Card = ({ id, onSelect }: CardProps) => (
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

/*
Response:
Oh! I like callbacks letting me know what's going to be return.
*/
