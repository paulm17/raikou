import * as postcss_lib_no_work_result from 'postcss/lib/no-work-result';
import postcss from 'postcss';

declare function testTransform(input: string): postcss.LazyResult | postcss_lib_no_work_result.default;

export { testTransform };
