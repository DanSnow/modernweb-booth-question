/**
 * start game
 * @param {import('xterm').Terminal} term
 */
export async function start(term) {
  let ended = false
  const { Game } = await import('../pkg/index.js')
  const game = new Game()
  term.write(game.render())
  let buf = ''
  term.onData((data) => {
    if (ended) {
      return
    }
    // Control sequences
    if (data.charCodeAt(0) === 0x1b) {
      // Ignore
      return
    }
    term.write(data)
    // backspace
    if (data.length === 1 && data.charCodeAt(0) === 127) {
      if (!buf) {
        return
      }
      buf = buf.slice(0, -1)
      // Erase a char on terminal
      term.write('\x1b[1D \x1b[1D')
    } else {
      buf += data
    }
    if (!buf.endsWith('\r')) {
      return
    }

    const { correct, message } = game.input(buf)
    term.write('\n' + message)
    buf = ''
    if (correct) {
      if (game.next_question()) {
        term.write(game.render())
      } else {
        term.write(game.end())
        ended = true
      }
    } else {
      term.write(game.render())
    }
  })
}
