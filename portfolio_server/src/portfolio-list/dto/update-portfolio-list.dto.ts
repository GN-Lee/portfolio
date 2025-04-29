import { PartialType } from '@nestjs/mapped-types';
import { CreatePortfolioListDto } from './create-portfolio-list.dto';

export class UpdatePortfolioListDto extends PartialType(CreatePortfolioListDto) {}
