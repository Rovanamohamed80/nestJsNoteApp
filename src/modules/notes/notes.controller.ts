import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import { addNoteDto, ParamDto, updateNoteDto } from './dto/note.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('notes')
@UseGuards(AuthGuard)
export class NotesController {
    constructor(private _NotesService:NotesService){ }
    @Post()
   addNote(@Body() body:addNoteDto ,@Req() req:any){
    body.user= req.user.userId  
    return this._NotesService.addNote(body)
    }
    @Get()
    getAllNotes(){
    return this._NotesService.getAllNotes()
    }
    @Delete('/:id')
    deleteNote(@Param() param:ParamDto,@Req() req:any){
   return this._NotesService.deleteNote(param.id)
    }
    @Put('/:id')
    updateNote(@Param() param:ParamDto ,@Body() body:updateNoteDto ,@Req() req:any){
    body.user= req.user.userId  
    return this._NotesService.updateNote(body,param.id)
    }

}
