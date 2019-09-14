var app = new Vue({
    el: '.app',
    data:{
        search:'',
        searchlist:[],
        todolist:[],
        newtodo:'',
        check_style:{},
    },
    watch:{
        search: function(msg){
            var arr_tmp_1 = []
            var arr_tmp_2 = []
            arr_tmp_1 = this.todolist.slice()//複製todolist
            arr_tmp_1.forEach((el) =>{//forEach 搜尋 msg 取得 idx
                idx = el.title.indexOf(msg)
                if(idx != -1) arr_tmp_2.push(el)
            this.searchlist = arr_tmp_2                
            })
            // var indices = []
            // var idx = tmp.indexOf(msg) 
            // while(idx != -1){
            //     indices.push(idx)
            //     idx = tmp.indexOf(msg, idx+1)
            // }
        }
    },
    methods:{
        addtodo:function(todo){
            this.todolist.push({
                title:todo,
                check:'Done',
                edit:false,
                style:{}
            })
            this.newtodo = ''
        },
        switch_edit:function(todo){
                todo.edit = !todo.edit
        },
        check:function(todo){
            if(todo.check === 'Done'){
                todo.check = 'Undo'
                todo.style = {
                    'text-decoration':'line-through',
                    'color':'blue'
                }
            }
            else{
                todo.check = 'Done'
                todo.style = {
                    'text-decoration':'none',
                    'color':'black'
                }
            }
        },
        removetodo:function(index){
            this.todolist.splice(index,1)
        }
    },
})