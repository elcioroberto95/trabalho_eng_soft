import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';
import style from 'styled-components';
import { boardService } from '../application/services';

const ButtonStyle = style.button`
  color: #ffffffc9;
  position: absolute;
  bottom: 8px;
  right: 26px;
`;

const DeleteBoardButton = ({ boardKey }) => {
    return (
        <ButtonStyle
            onClick={() => boardService.deleteBoard(boardKey)}
            className="transform transition-all text-white text-opacity-75 hover:text-opacity-100 hover:translate-x-px scale-100 hover:scale-110 mt-auto"
        >
            <DeleteOutlined />
        </ButtonStyle>
    );
};

export default DeleteBoardButton;
