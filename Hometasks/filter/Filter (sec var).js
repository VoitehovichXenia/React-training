var Filter = React.createClass({

    displayName: 'Filter',

    proptypes: {
        words: React.PropTypes.array,
    },

    getInitialState: function () {
        return {
            initialWordsList: this.props.words,
            currWords: this.props.words,
            isSorted: false,
            filterValue:'',
        }
    },

    sortWords: function (ev) {
        this.setState({isSorted: ev.target.checked});
        this.processingWordsList();
    },

    filterWords: function (ev) {
        this.setState({filterValue: ev.target.value});
        this.processingWordsList();
    },

    processingWordsList: function () {
        var newWordsList = this.state.currWords;

        if(this.state.filterValue) {
            newWordsList = newWordsList.filter( word =>{
                return word.indexOf(this.state.filterValue) !== '-1';
            });
        } else {
            newWordsList = newWordsList.slice();
        }

        if(this.state.isSorted) {
            newWordsList = newWordsList.sort();
        }

        this.setState({currWords: newWordsList});
    },

    resetButton: function() {
        this.setState({isSorted: false, currWords: this.state.initialWordsList, filterValue: ''});
    },

    render: function () {
        var words = this.state.currWords.map (word => 
            React.DOM.p({key: word}, word)
        );

        return React.DOM.div ({className:"FilterBlock"},
            React.DOM.input({className: 'checkbox', 
                type:"checkbox", 
                checked: this.state.isSorted, 
                onClick: this.sortWords}),
            React.DOM.input({className: 'textField', 
                type:"text", 
                value: this.state.filterValue, 
                onChange: this.filterWords}),
            React.DOM.input({className: 'resetButton', 
                type:"button", 
                value:"сброс", 
                onClick: this.resetButton}),
            React.DOM.div({className: 'FilterList'},
                words
            )
        )
    },
});