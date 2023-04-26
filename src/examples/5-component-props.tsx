type CardProps = {
  title: string;
};

export const Card = ({ title }: CardProps) => (
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

/*
Response:
I'm 100% on board with defining prop types! Very useful!
Although, there are libraries for that. I still don't wanna learn Typescript!

Example Library:
import PropTypes from 'prop-types';
Card.propTypes = {
  title: PropTypes.string
};
*/
