
// 生成 list card 中的内容
function generateListCard(item) {
    const card = document.createElement('div');
    card.className = 'assistant-card';
    card.style.cssText = 'min-width: 300px; max-width: 350px; height: 350px; margin: 10px; flex: 1 1 300px;';
  
    // 截取内容前200个字符,超出部分用省略号表示
    const truncatedContent = item.content.length > 150 ? item.content.slice(0, 150) + '...' : item.content;
  
    card.innerHTML = `
      <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
        <img src="https://static.xiaobot.net/paper/${item.imgUrl}" 
             alt="${item.title}" 
             class="assistant-image" 
             style="width: 64px; height: 64px;">
        <div class="stats" style="display: flex; justify-content: flex-end; width: 70%;">
          <div class="stat-item" style="margin-right: 10px; display: flex; flex-direction: column; align-items: center;">
            <span class="stat-value-reader" style="font-weight: bold;">
              ${item.reader}
            </span>
            <span class="stat-label">订阅数</span>
          </div>
          <div class="stat-item" style="display: flex; flex-direction: column; align-items: center;">
            <span class="stat-value-num" style="font-weight: bold;">
              ${item.num}
            </span>
            <span class="stat-label">内容</span>
          </div>
        </div>
      </div>
      


      <h2 class="assistant-title" style="font-size: 18px;">
        ${item.title}
      </h2>
      
      <div class="description-container" style="color: #333333;  height: 100px;">
        <div class="assistant-description" style="color: #333333; font-size: 15px; line-height: 1.4; height: 200px; overflow: hidden;">
          ${truncatedContent}   
        </div>
         <div style="display: flex; justify-content: space-between; font-size: 15px; line-height: 1.4;align-items: center; color: #5a5858; margin-bottom: 100px;">
            <p class="author">主理人: @<span class="author-name">${item.author}</span></p>
            <a href="https://xiaobot.net/p/${item.id}?refer=a1be91e6-ff56-473b-8404-a6f1f5856dba" target="_blank" style="color: #03a9f4; text-decoration: none;">详情</a>
        </div>
      </div>

     
      `;
  
    return card;
}


// 生成数据块的HTML结构
function generateDiv(item) {
    const div = document.createElement('div');
    div.classList.add('block');
    item.classNames.forEach(className => div.classList.add(className));

    const blockInfo = document.createElement('div');
    blockInfo.classList.add('block-info');

    return div;
}


// 根据选定的类别过滤数据


// 更新类别选择按钮的状态


// 显示搜索结果数量

// 根据选定的类别过滤数据块
function filterBlock() {
    const category = document.querySelector('.category-button.selected').dataset.category;
    const resultsCount = Array.from(data).reduce( (count, item) => {
        const shouldShow = category === 'all' || item.classNames.includes(category);
        item.match = shouldShow ? true : false;
        return count + (shouldShow ? 1 : 0)
    }
    , 0);
    showResult(resultsCount);
    loadBlock(true)
}

