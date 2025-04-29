import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePortfolioListDto } from './dto/create-portfolio-list.dto';
import { Repository } from 'typeorm';
import { PortfolioList } from './entities/portfolio-list.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PortfolioListService {
  constructor(
    @InjectRepository(PortfolioList)
    private portfolioListRepository: Repository<PortfolioList>,
  ) {}

  async create(createPortfolioListDto: CreatePortfolioListDto) {
    const portfolioList = this.portfolioListRepository.create(
      createPortfolioListDto,
    );
    await this.portfolioListRepository.save(portfolioList);
    return { success: true, code: 200, message: '포트폴리오 등록 성공' };
  }

  async findAll() {
    const allPortfolioList = await this.portfolioListRepository.find();
    if (!allPortfolioList) {
      throw new NotFoundException({
        success: false,
        code: 404,
        message: '포트폴리오 목록을 찾을 수 없습니다.',
      });
    }
    return {
      success: true,
      code: 200,
      message: '포트폴리오 조회 성공',
      data: allPortfolioList,
    };
  }

  async findOne(id: number) {
    const findPortfolioList = await this.portfolioListRepository.findOne({
      where: { id },
    });
    if (!findPortfolioList) {
      throw new NotFoundException({
        success: false,
        code: 404,
        message: '포트폴리오 목록을 찾을 수 없습니다.',
      });
    }
    return {
      success: true,
      code: 200,
      message: `${id}번 포트폴리오 조회 성공`,
      data: findPortfolioList,
    };
  }

  async remove(id: number) {
    const findPortfolioList = await this.portfolioListRepository.findOne({
      where: { id },
    });
    if (!findPortfolioList) {
      throw new NotFoundException({
        success: false,
        code: 404,
        message: `${id}번 포트폴리오 목록을 찾을 수 없습니다.`,
      });
    }
    await this.portfolioListRepository.delete(id);
    return { success: true, code: 200, message: '포트폴리오 삭제 성공' };
  }
}
