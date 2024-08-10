import React from 'react';

interface TodoItemProps {
  index: number;
  todo: { text: string; isCompleted: boolean };
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ index, todo, onToggle, onDelete }) => {
  const { text, isCompleted } = todo;

  const toggleButtonText = isCompleted ? '已完成' : '未完成';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        margin: '5px 0',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: isCompleted ? '#d3d3d3' : '#ffffff',
      }}
    >
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {index + 1}. {text}
      </span>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => onToggle(index)}>{toggleButtonText}</button>
        <button onClick={() => onDelete(index)}>删除</button>
      </div>
    </div>
  );
};

export default TodoItem;