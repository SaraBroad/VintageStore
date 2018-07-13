import React, { Component } from "react";
import API from "../../utils/API";


class Saved extends Component {
  state = {
    products: []
  };

//   componentDidMount() {
//     this.getSavedArticles();
//   }

  addToCart = () => {
    API.addToCart()
      .then(res =>
        this.setState({
          products: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleaAddToCart = id => {
    API.addToCart(id).then(res => this.addToCart());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(ReactJS) New York Times Article Scrubber</strong>
              </h1>
              <h2 className="text-center">
                Search for and save articles of interest.
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Articles" icon="download">
              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map(article => (
                    <Article
                      key={article._id}
                      _id={article._id}
                      title={article.title}
                      url={article.url}
                      date={article.date}
                      handleClick={this.handleArticleDelete}
                      buttonText="Delete Article"
                      saved
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Articles</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
