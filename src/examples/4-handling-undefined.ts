type User = {
  id: string;
  name: string;
  nickname?: string;
};

export const formatNickname = ({ nickname }: Pick<User, "nickname">) => {
  return nickname.toUpperCase();
};

/*
Response:
Oh, helps you to spot optional props and makes you handle them!
*/
