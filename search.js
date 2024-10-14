let currentIndex = 0;
const cardsPerLoad = 20;
let filteredData = [];

// 获取所有唯一的 hashtags 及其数量
function getUniqueHashtags() {
    const hashtagCounts = {};
    data.forEach(item => {
        item.classNames.forEach(tag => {
            hashtagCounts[tag] = (hashtagCounts[tag] || 0) + 1;
        });
    });
    return hashtagCounts;
}

// 生成 hashtag 列表
function generateHashtags() {
    const container = document.getElementById('hashtagContainer');
    const hashtagCounts = getUniqueHashtags();
    
    Object.entries(hashtagCounts).forEach(([tag, count]) => {
        const hashtagElement = document.createElement('div');
        hashtagElement.className = 'hashtag';
        hashtagElement.innerHTML = `#${tag} <span style="color: #777; font-size: 0.9em;">(${count})</span>`;
        hashtagElement.onclick = () => filterByHashtag(tag);
        container.appendChild(hashtagElement);
    });
}

// 根据 hashtag 筛选卡片
function filterByHashtag(tag) {
    filteredData = data.filter(item => item.classNames.includes(tag));
    currentIndex = 0;
    const container = document.getElementById('assistantGrid');
    container.innerHTML = '';
    loadCards();
    
    // 添加以下代码来滚动到页面顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

 // 添加以下辅助函数
 function scrollToTop() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrollTop - scrollTop / 8);
    }
}

// 修改 filterByHashtag 函数
function filterByHashtag(tag) {
    filteredData = data.filter(item => item.classNames.includes(tag));
    currentIndex = 0;
    const container = document.getElementById('assistantGrid');
    container.innerHTML = '';
    loadCards();
    scrollToTop();
}


// 搜索框
function filterAssistants() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const assistantGrid = document.getElementById('assistantGrid');
    const assistantCards = assistantGrid.getElementsByClassName('assistant-card');

    for (let i = 0; i < assistantCards.length; i++) {
        const title = assistantCards[i].getElementsByClassName('assistant-title')[0];
        const description = assistantCards[i].getElementsByClassName('description-container')[0];
        if (title.innerHTML.toUpperCase().includes(filter) || 
            description.innerHTML.toUpperCase().includes(filter)) {
            assistantCards[i].style.display = '';
        } else {
            assistantCards[i].style.display = 'none';
        }
    }
}
