import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Blog } from './blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {

    constructor(
        @InjectRepository(Blog)
        private blogRepository: Repository<Blog>,
    ) {}


    async findAll(author: string = '', keyword: string = '') {
        const condition = {};
        if (author) {
            condition['author'] = author;
        }

        if (keyword) {
            condition['title'] = Like(`%${keyword}%`);
        }
        return await this.blogRepository.find({
            where: condition,
            order: {
                createAt: "DESC",
            }
        })
    }


    async remove(id: number) {
        return await this.blogRepository.delete(id);
    }

    async update(id: number, blog: CreateBlogDto) {
        return await this.blogRepository.update(id, blog);
    }


    async findOne(id: number) {
        return await this.blogRepository.findOneBy({ id })
    }

    async create(blog: CreateBlogDto) {
        return await this.blogRepository.save(blog);
    }
}