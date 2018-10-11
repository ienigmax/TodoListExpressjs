export const getAllTasks = () => {
    return "SELECT * FROM tasks";
};

export const insertTask = () => {
    return 'INSERT INTO tasks (uuid, title, content, created_at, updated_at, status) VALUES (?,?,?,?,?,?)';
};

export const deleteTask = () => {
    return 'DELETE FROM tasks WHERE uuid=?';
};

export const updateTaskStatus = () => {
    return 'UPDATE tasks SET status=?, updated_at=? WHERE uuid=?';
};

export const updateTaskTitle = () => {
    return 'UPDATE tasks SET title=?, updated_at=? WHERE uuid=?';
};

export const updateTaskContent = () => {
    return 'UPDATE tasks SET content=?, updated_at=? WHERE uuid=?';
};