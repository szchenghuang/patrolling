class Patrolling {
  constructor( cap, timeout, flush, push ) {
    this._cap = cap;
    this._timeout = timeout;
    this._flush = flush;
    this._push = push;

    this._count = 0;
    this._timer = undefined;
  }

  async flush() {
    await this._flush();
    this.stopTimer();
  }

  async push( history ) {
    this._count = await this._push( history );

    if ( this._cap <= this._count ) {
      await this.flush();
    }

    if ( !this._timer ) {
      this.startTimer();
    }
  }

  startTimer() {
    if ( this._timer ) {
      this.stopTimer();
    }

    this._timer = setInterval( async () => {
      if ( 0 < this._count ) {
        await this.flush();
      }
    }, this._timeout );
  }

  stopTimer() {
    clearInterval( this._timer );
    this._timer = undefined;
  }
}

export default Patrolling;
