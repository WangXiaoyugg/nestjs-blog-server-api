import { Controller, Get, Param, Query, Delete, Post, Body, Patch, HttpException, HttpStatus, ParseIntPipe, UseGuards, Request } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogService } from './blog.service';
import { AuthGuard } from 'src/user/user.guard';

@Controller('blog')
export class BlogController {

    constructor(
        private blogService: BlogService,

    ) {

    }

    @Get()
    async findAll(
        @Query('keyword') keyword: string, 
        @Query('author') author: string) 
    {
        return await this.blogService.findAll(author, keyword);
    }

    @Get(':id')
    async findOne( @Param('id', ParseIntPipe) id: number)
    {
        const blog = await this.blogService.findOne(id);
        return blog;
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        return await this.blogService.remove(id);
    }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() createBlogDto: CreateBlogDto, @Request() req) {
        createBlogDto.author = req.user.username;
        const res  = await this.blogService.create(createBlogDto);
        return res;
    }
    
    @UseGuards(AuthGuard)
    @Patch(":id")
    async update(@Param('id', ParseIntPipe) id: number, @Body() createBlogDto: CreateBlogDto) {
        return await this.blogService.update(id, createBlogDto);
    }

}
