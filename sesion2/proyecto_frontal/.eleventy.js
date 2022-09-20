module.exports = config => {
    const sortDisplayOrder = require('./src/utils/sort-by-display-order.js');
    config.addPassthroughCopy('./src/images/');
    config.addCollection('work', collection => {
        return sortDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'))
    });
    config.addCollection('featuredWork', collection => {
        return sortDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter( x => x.data.featured)
    });
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}