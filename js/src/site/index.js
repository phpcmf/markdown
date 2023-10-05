import app from 'cmf/site/app';
import { initialize } from '../common/index';

app.initializers.add('cmf-markdown', initialize);
