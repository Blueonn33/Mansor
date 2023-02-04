const apiBaseUrl = 'https://localhost:7286'
export const endpoints = {
    createTask: () => `${apiBaseUrl}/api/create`,
    loadTasks: (taskGroupId) => `${apiBaseUrl}/api/tasksList/${Number(taskGroupId)}`,
}
