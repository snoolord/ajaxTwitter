class followToggle {
  constructor ($followToggle) {
    this.$el = $followToggle;
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    // console.log(this.followState);
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  handleClick (e) {
    console.log(this.followState);
    if (this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      e.preventDefault();
      $.ajax({
        url: `/users/${this.userId}/follow`,
        method: "POST",
        dataType: "json",
        success: function() {
          this.followState = "followed";
          this.render();
        }.bind(this)
      });
    } else {
      this.followState = "unfollowing";
      this.render();
      e.preventDefault();
      $.ajax({
        url: `/users/${this.userId}/follow`,
        method: "DELETE",
        dataType: "json",
        success: function() {
          this.followState = "unfollowed";
          this.render();
        }.bind(this)
      });
    }
  }
  render () {
    if (this.followState === "unfollowed") {
      this.$el.prop("disabled", false);
      this.$el.val('Follow!');
    } else if (this.followState === "followed") {
      // console.log(this.followState);
      this.$el.prop("disabled", false);
      this.$el.val('Unfollow!');
    } else {
        this.$el.prop("disabled", true);
    }
  }
}

module.exports = followToggle;
