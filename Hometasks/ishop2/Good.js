var Good = React.createClass({

    displayName: 'Good',

    propTypes: {
        imgSRC: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        quantity: React.PropTypes.number.isRequired,
        isHighlighted: React.PropTypes.bool.isRequired,
        cbHighlightGood: React.PropTypes.func.isRequired,
        cbDeleteGood: React.PropTypes.func.isRequired,
    },

    highlightGood: function () { //ev
        //var id = ev.target.parentNode.getAttribute('data-id'); - second solution
        this.props.cbHighlightGood(this.props.id);
    },

    deleteGood: function (ev) {
        ev.stopPropagation();
        if(confirm('Do you really want to delete this good?')){
            this.props.cbDeleteGood(this.props.id);
        } else {
            alert('The '+ this.props.name + ' wasn\'t deleted');
        }        
    },

    render: function () {
        return React.DOM.tr({className: 'Good', 
            //'data-id': this.props.id, - special attribute
            style: this.props.isHighlighted ? {backgroundColor: '#dc143c'}:{},
            onClick: this.highlightGood,
            },
            React.DOM.td(null, 
                React.DOM.img({src: this.props.imgSRC, className: 'GoodImage'})
            ),
            React.DOM.td(null, this.props.name),
            React.DOM.td(null, this.props.price + '$'),
            React.DOM.td(null, this.props.quantity),
            React.DOM.td(null, 
                React.DOM.input({type: 'button', 
                    value: 'Delete', 
                    className: 'resetButton',
                    onClick: this.deleteGood
                })
            )
        );
    },
});