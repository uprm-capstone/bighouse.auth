import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-headerapikey';
import { AuthService } from '../auth.service';

@Injectable()
export class HeaderApiKeyStrategy extends PassportStrategy(
  Strategy,
  'api-key',
) {
  constructor(private readonly authService: AuthService) {
    super({ header: 'X-API-KEY', prefix: '' }, true, async (apiKey, done) => {
      return this.validate(apiKey, done);
    });
  }

  public validate = (apiKey: string, done: any) => {
    console.log(
      '## HeaderApiKeyStrategy',
      this.authService.validateApiKey(apiKey),
    );

    if (this.authService.validateApiKey(apiKey)) {
      done(null, true);
    }
    console.log('oh no');

    done(new UnauthorizedException(), null);
  };
}
