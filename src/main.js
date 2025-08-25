import './style.css';

const onClickAdd = () => {
    // inputの値を取得・初期化
    const inputText = document.getElementById('add-text').value;
    document.getElementById('add-text').value = '';

    // 未完了リストに追加
    newTodoList(inputText);
}

// 入力されたテキストを基に未完了のTODOを作成
const newTodoList = (todo) => {
    // li生成
    const li = document.createElement('li');
    li.className = 'item';
    // p生成
    const p = document.createElement('p');
    p.className = 'text';
    p.innerText = todo;
    // li配下にpタグを差し込む
    li.appendChild(p);
    
    // 完了button生成
    const completeButton = document.createElement('button');
    completeButton.className = 'button-complete';
    completeButton.innerText = '完了';
    completeButton.addEventListener('click', () => {
        // 完了ボタンが押されたら、完了ボタンと削除ボタンを削除
        completeButton.remove();
        deleteButton.remove();
        // テキストのみを達成エリアに移動
        const newList = document.getElementById('complete-list');
        newList.appendChild(li);
        // 戻すボタンを生成
        const undoButton = document.createElement('button');
        undoButton.className = 'button-undo';
        undoButton.innerText = '戻す';
        undoButton.addEventListener('click', () => {
            // 戻すが押されたら未完了に戻す
            const undoText = undoButton.previousElementSibling.innerText;
            newTodoList(undoText);
            li.remove();
        });
        
        li.appendChild(undoButton);
    });
    
    // 削除button生成
    const deleteButton = document.createElement('button');
    deleteButton.className = 'button-delete';
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click', () => {
        // 簡潔ver
        // li.remove();

        // 明示的ver
        const deleteLi = deleteButton.closest('li');
        document.getElementById('unfinished-list').removeChild(deleteLi);
    });
    
    // 未完了のulタグ配下に各要素を追加
    const ul = document.getElementById('unfinished-list');
    ul.appendChild(li);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    
}

document.getElementById('add-button').addEventListener('click', onClickAdd);