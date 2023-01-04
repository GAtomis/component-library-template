#!/usr/bin/env node

import {Command } from 'commander'
import {onCreate} from './commands/create'

 const program=new Command()
 program.command('create').description('some msg').option('-t --type <type>','类型信息').action(onCreate)

 //执行命令解析
 program.parse()
 