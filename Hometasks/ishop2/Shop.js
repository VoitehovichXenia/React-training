var GoodsTable = React.createClass({

    displayName: 'GoodsTable',

    getDefaultProps: function() {
        return {
            shopName: 'Food Market',
            goods: [{name: 'Carrot', price: '1$', imgSRC: 'https://ginido.com/wp-content/uploads/2020/03/carrot.jpg', quantity: 200}],
        }
    },

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        goods: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },

    getInitialState: function() {
        return { 
          highlightedGood: null,
          goods: this.props.goods,
        };
    },

    highlightGood: function (good) {
       this.setState({highlightedGood: good});
    },

    deleteGood: function (goodName) {
        var newGoods = this.state.goods.filter(good => {
            return good.name !== goodName;
        });
        this.setState({goods: newGoods});
    },

    render: function () {

        var goodsTR = this.state.goods.map(good =>
             React.createElement(Good, {
                key: good.name, 
                name: good.name, 
                price: good.price, 
                imgSRC: good.imgSRC, 
                quantity: good.quantity, 
                isHighlighted: this.state.highlightedGood === good.name,
                cbHighlightGood: this.highlightGood,
                cbDeleteGood: this.deleteGood,
             })
        );

        return React.DOM.table({className: 'GoodsTable'},
            React.DOM.caption({className:'shop-name'}, this.props.shopName),
            React.DOM.tbody(null,
                React.DOM.tr({key: 'Head'},
                    React.DOM.th(null,'Photo'),
                    React.DOM.th(null, 'Name'),
                    React.DOM.th(null, 'Price'),
                    React.DOM.th(null, 'Quantity'),
                    React.DOM.th(null, 'Control'),
                ),
                goodsTR,
            )       
        )
    },
});