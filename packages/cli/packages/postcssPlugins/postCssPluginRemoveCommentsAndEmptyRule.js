const postCss = require('postcss');

const postCssPluginRemoveCommentsAndEmptyRule = postCss.plugin('postcss-plugin-remove-comments-emptyrule', ()=>{
    return (root)=>{
        // 移除注释
        root.walkComments(comment => {
            comment.remove();
        });
        // 移除空声明
        root.walkRules(rule => {
            if (rule.nodes && rule.nodes.length === 0) {
                rule.remove();
            }
        });
    };
});

module.exports = postCssPluginRemoveCommentsAndEmptyRule;