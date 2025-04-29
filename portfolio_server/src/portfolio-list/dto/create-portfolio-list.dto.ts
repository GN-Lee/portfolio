import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreatePortfolioListDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsUrl()
  image: string;

  @IsUrl()
  @IsNotEmpty()
  link: string;

  @IsString()
  @IsNotEmpty()
  skills: string;
}
