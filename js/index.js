import 'xterm/css/xterm.css'

import { Terminal } from 'xterm'
import { start } from './game'

const term = new Terminal()

const $root = document.querySelector('#root')
term.open($root)
term.focus()

start(term).catch(console.error)
