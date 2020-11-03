import React, { FC, ReactChild } from 'react';

import { Alert } from 'react-bootstrap';

type Props = {
  variant: string;
  children: ReactChild;
};

const Message: FC<Props> = ({ variant = 'info', children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default Message;
