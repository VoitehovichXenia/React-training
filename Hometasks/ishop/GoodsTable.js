var GoodsTable = React.createClass({

    displayName: 'GoodsTable',

    getDefaultProps: function() {
        return {
            shopName: 'Food Market',
            goods: [{name: 'Carrot', price: '1$', img: 'https://ginido.com/wp-content/uploads/2020/03/carrot.jpg', rest: 200}],
        }
    },

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        goods: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },

    render: function () {

        var goodsTR = this.props.goods.map(function(good) {
            return React.DOM.tr({key: good.name, className: 'Good'},
                React.DOM.td(null, 
                    React.DOM.img({src: good.img, className: 'GoodImage'})
                ),
                React.DOM.td(null, good.name),
                React.DOM.td(null, good.price),
                React.DOM.td(null, good.rest),
            );
        });

        return React.DOM.table({className: 'GoodsTable'},
            React.DOM.caption({className:'shop-name'}, this.props.shopName),
            React.DOM.tbody(null,
                React.DOM.tr({key: 'Head'},
                    React.DOM.th({className: 'GoodImage'}, 'Photo'),
                    React.DOM.th(null, 'Good name'),
                    React.DOM.th(null, 'Price'),
                    React.DOM.th(null, 'Warehouse balance'),
                ),
                goodsTR,
            )       
        )
    },
});