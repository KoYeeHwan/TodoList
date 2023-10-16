const todoList = [];

function addTodo(ev){
    if (document.getElementById('search-input').value.trim() === '')
        return;
}

//추가할 일정요소 만들기
function getTodoNode(){
    const todoTitle = document.getElementById('search-input').value;

    const todoNode = document.createElement('div');
    todoNode.innerHTML = todoTitle;
    todoNode.onclick = function(){
        todoNode.isDone = !todoNode.isDone;
        if(todoNode.isDone){
            this.className = 'done';
        } else {
            this.className = '';
        }
    }
}

//요소삭제버튼
const removeBtn = document.createElement('button');
removeBtn.className = 'remove-btn';
removeBtn.innerHTML = "<i class= fa-solid fa-xmark'></i>";
todoNode.appendChild(removeBtn);
removeBtn.onclick = function(){
    this.parentNode.remove();
}


function allClearList(e){
    if(confirm("정말 삭제하시겠습니까?")==true){ //취소메시지가 true(ok)일때
        if(result.innerText==''){                      //목록칸이 비어있다면
            alert("삭제할 목록이 없습니다");            //삭제할 목록이 없다는 경고창뜨기
        }else{                                         //삭제할 목록이 있다면
            result.innerText='';                       //전체 삭제
        }
    }else{                                      //취소메시지가 false(no)일때
        return false;                           //삭제 취소
    }
}