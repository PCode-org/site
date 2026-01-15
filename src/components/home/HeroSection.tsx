import React from 'react';
import Link from '@docusaurus/Link';
import styles from './home.module.css';

export default function HeroSection(): JSX.Element {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroEmoji}>🚀</span>
          <span className={styles.heroTitleText}>Hagicode</span>
        </h1>
        <p className={styles.heroSubtitle}>
          <span>智能</span>
          <span> · </span>
          <span>便捷</span>
          <span> · </span>
          <span>有趣</span>
        </p>
        <p className={styles.heroDescription}>
          用 AI 重新定义代码开发体验
        </p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/installation"
          >
            开始使用
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start/conversation-session"
          >
            了解更多
          </Link>
        </div>
        <div className={styles.qqGroupCard}>
          <div className={styles.qqGroupCardIcon}>🤝</div>
          <h3 className={styles.qqGroupCardTitle}>加入技术支持群组</h3>
          <p className={styles.qqGroupCardDescription}>
            HagiCode 技术支持 QQ 群 610394020
          </p>
          <a
            href="https://qm.qq.com/q/Wk6twXHdyS"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary"
          >
            立即加入
          </a>
        </div>
      </div>
    </section>
  );
}
