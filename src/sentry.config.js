const {withSentryConfig}=require("@sentry/nextjs")

const moduleExports={

}
const SentryWebpackPluginsOptions={
    silent:true
}
module.exports=withSentryConfig(moduleExports,SentryWebpackPluginsOptions)