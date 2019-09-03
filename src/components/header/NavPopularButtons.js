import React from 'react';
import { Button } from 'reactstrap';
import { getTopics } from '../../utils/api';
import { navigate } from "@reach/router";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class NavPopularButton extends React.Component {
  state = {
    topics: null,
    isLoading: true,
    sortby: 'article_count'
  }

  componentDidMount() {
    getTopics(3, this.state.sortby)
      .then((topics) => {
        this.setState({ topics, isLoading: false })
      })
  }

  handleTopicsClick = (slug) => {
    navigate('/articles?topic=' + slug);
  }

  render() {
    return (
      (!this.state.isLoading) && this.state.topics.map(topic =>
        <Button color="light" key={topic.slug} onClick={() => this.handleTopicsClick(topic.slug)}><FontAwesomeIcon className="trending" icon={faChartLine}
          alt="trending" />
          {topic.slug}
        </Button >
      )
    );
  }
}