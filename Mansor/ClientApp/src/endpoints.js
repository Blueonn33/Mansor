const apiBaseUrl = 'https://localhost:7286'
export const endpoints = {
    loadTaskGroups: () => `${apiBaseUrl}/api/taskGroups`,
    getTaskGroupName: (taskGroupId) => `${apiBaseUrl}/api/taskGroup/${taskGroupId}`,
    createTaskGroup: () => `${apiBaseUrl}/api/taskGroup/create`,
    loadTaskItems: (taskGroupId) => `${apiBaseUrl}/api/taskItems/${taskGroupId}`,
    createTaskItem: (taskGroupId) => `${apiBaseUrl}/api/taskItem/create/${taskGroupId}`,
}