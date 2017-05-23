class TodoService {
    static async getAll() {
        
        let root = document.getElementById('root');
        let moduleId = window.$2sxc(root).id;
        let tabId = window.$.ServicesFramework(moduleId).getTabId();
        
        var url = window.$2sxc(root).resolveServiceUrl('app/auto/content/Todo-Item');
        
        try {
            var todos = await fetch(url + "?moduleid=" + moduleId + "&tabid=" + tabId);
            return todos.json();
        }
        catch(e) {
            console.error(e);
        }
    }
}

export default TodoService;