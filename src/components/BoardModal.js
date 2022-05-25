import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const BoardModal = (props) => {
    const { closeModal, action, visible } = props;
    const [boardTitle, setBoardTitle] = useState('');
    const [loading, setLoading] = useState(false);

    const isEmptyText = (text) => !text || !text.trim();

    const handleCreateBoard = async (event) => {
        setLoading(true);
        event.preventDefault();
        if (isEmptyText(boardTitle)) {
            return;
        }
        await action({
            title: boardTitle,
        });
        setBoardTitle('');
        setLoading(false);
    };

    return (
        <Modal
            title="Adicionar Quadro"
            width="400px"
            visible={visible}
            onCancel={closeModal}
            footer={null}
        >
            <form className={`w-full`} onSubmit={(event) => handleCreateBoard(event)}>
                <Input
                    className={`mb-3`}
                    placeholder="Título"
                    onChange={(event) => setBoardTitle(event.target.value)}
                    value={boardTitle}
                />
                <Button
                    type="primary"
                    onClick={(event) => handleCreateBoard(event)}
                    loading={loading}
                    disabled={isEmptyText(boardTitle)}
                >
                    Adicionar
                </Button>
            </form>
        </Modal>
    );
};

BoardModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    action: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
};
